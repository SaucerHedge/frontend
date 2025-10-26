import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Wallet, ChevronDown, LogOut } from 'lucide-react';
import { getWebAuthClient } from '@lit-protocol/vincent-app-sdk/webAuthClient';
import { isExpired } from '@lit-protocol/vincent-app-sdk/jwt';

const VINCENT_APP_ID = 7142827824;

function VincentAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [vincentAppClient, setVincentAppClient] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Initialize Vincent client
  useEffect(() => {
    try {
      const client = getWebAuthClient({
        appId: VINCENT_APP_ID
      });
      setVincentAppClient(client);
    } catch (err) {
      console.error('Failed to initialize Vincent client:', err);
      setError('Failed to initialize authentication client');
    }
  }, []);

  // Check for authentication on component mount
  useEffect(() => {
    if (!vincentAppClient) return;
    
    checkAuthentication();
    
    window.addEventListener('popstate', checkAuthentication);
    return () => window.removeEventListener('popstate', checkAuthentication);
  }, [vincentAppClient]);

  const checkAuthentication = () => {
    if (!vincentAppClient) return;
    
    try {
      const storedJWT = localStorage.getItem('VINCENT_AUTH_JWT');
      
      if (storedJWT && !isExpired(storedJWT)) {
        const decoded = parseJWT(storedJWT);
        if (decoded) {
          setUser(decoded);
          setIsAuthenticated(true);
        }
      } else if (storedJWT) {
        localStorage.removeItem('VINCENT_AUTH_JWT');
      }

      if (vincentAppClient.uriContainsVincentJWT()) {
        handleAuthCallback();
      }
    } catch (err) {
      console.error('Auth check error:', err);
      setError('Failed to verify authentication');
    }
  };

  const handleAuthCallback = () => {
    try {
      // Remove trailing slash from origin to match JWT audience
      const origin = window.location.origin;
      const { decodedJWT, jwtStr } = vincentAppClient.decodeVincentJWTFromUri(origin);

      if (jwtStr) {
        localStorage.setItem('VINCENT_AUTH_JWT', jwtStr);
        setUser(decodedJWT);
        setIsAuthenticated(true);
        setError(null);
        
        vincentAppClient.removeVincentJWTFromURI();
      }
    } catch (err) {
      console.error('Auth callback error:', err);
      setError('Failed to complete authentication: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    if (!vincentAppClient) {
      setError('Authentication client not initialized');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Use origin without trailing slash to match Vincent's expected audience
      const redirectUri = window.location.origin + window.location.pathname;
      vincentAppClient.redirectToConnectPage({
        redirectUri: redirectUri.replace(/\/$/, '') // Remove trailing slash
      });
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to initiate authentication');
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('VINCENT_AUTH_JWT');
    setIsAuthenticated(false);
    setUser(null);
    setError(null);
    setShowDropdown(false);
  };

  const parseJWT = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  const getShortAddress = () => {
    if (!user?.pkpInfo?.ethAddress) return '';
    const addr = user.pkpInfo.ethAddress;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="relative">
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-red-700">{error}</div>
        </div>
      )}

      {isAuthenticated && user ? (
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <Wallet className="h-4 w-4" />
            <span className="text-sm">{getShortAddress()}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {showDropdown && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowDropdown(false)}
              />
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-semibold text-gray-700">Connected to Vincent</span>
                  </div>
                  {user.pkpInfo?.ethAddress && (
                    <div className="text-xs text-gray-600 font-mono break-all">
                      {user.pkpInfo.ethAddress}
                    </div>
                  )}
                </div>

                <div className="p-2 border-b border-gray-200">
                  {user.authentication?.value && (
                    <div className="px-2 py-1.5">
                      <div className="text-xs text-gray-500 mb-1">Email</div>
                      <div className="text-xs text-gray-800 break-all">{user.authentication.value}</div>
                    </div>
                  )}
                  {user.pkpInfo?.tokenId && (
                    <div className="px-2 py-1.5">
                      <div className="text-xs text-gray-500 mb-1">Token ID</div>
                      <div className="text-xs text-gray-800 font-mono break-all">
                        {user.pkpInfo.tokenId.slice(0, 20)}...
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-2">
                  <button
                    onClick={() => {
                      if (user.pkpInfo?.ethAddress) {
                        navigator.clipboard.writeText(user.pkpInfo.ethAddress);
                        alert('Address copied to clipboard!');
                      }
                    }}
                    className="w-full text-left px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    Copy Address
                  </button>
                </div>

                <div className="p-2 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-2 py-2 text-xs text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Disconnect
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={handleLogin}
          disabled={isLoading || !vincentAppClient}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Connecting...</span>
            </>
          ) : (
            <>
              <Wallet className="h-4 w-4" />
              <span className="text-sm">Connect with Vincent</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default VincentAuth;