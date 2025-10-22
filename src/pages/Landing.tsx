import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/wallet/WalletButton";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Database,
  Leaf,
  Bot,
  Lock,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Glow Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary-glow)/0.15)_0%,transparent_60%)] pointer-events-none" />

      {/* Header */}
      <header className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              SaucerHedge
            </span>
          </div>
          <div className="flex items-center gap-4">
            <WalletButton />
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              onClick={() => (window.location.href = "/app")}
            >
              Launch App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary-glow">
            <Sparkles className="h-4 w-4" />
            <span>Built for ETHOnline on Hedera, Envio & Lit Protocol</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary-glow to-accent bg-clip-text text-transparent">
              Impermanent Loss
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Protection Protocol
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced DeFi protocol that protects liquidity providers from
            impermanent loss by combining SaucerSwap V2 concentrated liquidity
            with leveraged short positions via Bonzo Finance. Chat with our AI
            agent to optimize your hedging strategy.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.5)] transition-all"
              onClick={() => (window.location.href = "/app")}
            >
              Start Building Wealth
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            How SaucerHedge Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Automated impermanent loss protection in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Deposit Liquidity</h3>
              <p className="text-muted-foreground">
                Provide liquidity to SaucerSwap V2 pools. AI analyzes optimal
                tick ranges for concentrated liquidity positions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Automated Hedging</h3>
              <p className="text-muted-foreground">
                79% goes to LP, 21% opens leveraged shorts via Bonzo Finance
                flash loans. Strategy encrypted with Lit Protocol.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Monitor Protection</h3>
              <p className="text-muted-foreground">
                Envio tracks all positions in real-time. Watch your hedged
                returns and IL protection metrics live on the dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Powered By Industry Leaders
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-b from-card to-background">
              <div className="text-3xl font-bold text-primary-glow mb-2">
                SaucerSwap V2
              </div>
              <p className="text-sm text-muted-foreground">
                Concentrated liquidity DEX on Hedera. Earn trading fees while
                maintaining capital efficiency.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-accent/30 bg-gradient-to-b from-card to-background">
              <div className="text-3xl font-bold text-accent mb-2">
                Bonzo Finance
              </div>
              <p className="text-sm text-muted-foreground">
                Lending protocol (Aave V2 fork). Flash loans enable
                gas-efficient leveraged short positions.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-b from-card to-background">
              <div className="text-3xl font-bold text-primary-glow mb-2">
                Hedera
              </div>
              <p className="text-sm text-muted-foreground">
                Lightning-fast network with HTS support. Predictable low fees
                and MEV-resistant transaction ordering.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Enhanced With
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border border-primary/20 bg-gradient-to-b from-card/50 to-background/50">
                <div className="text-xl font-bold text-accent mb-1">Envio</div>
                <p className="text-xs text-muted-foreground">
                  Real-time indexing of all LP positions, hedges, and IL metrics
                  for instant dashboard updates.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-gradient-to-b from-card/50 to-background/50">
                <div className="text-xl font-bold text-primary-glow mb-1">
                  Lit Protocol
                </div>
                <p className="text-xs text-muted-foreground">
                  Encrypt custom hedging strategies and protect proprietary IL
                  protection algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Built on cutting-edge AI and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <Shield className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">IL Protection</h3>
            <p className="text-muted-foreground">
              Automated hedging strategy protects against impermanent loss by
              balancing LP gains with leveraged short positions.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-accent/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-shadow">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Flash Loan Efficiency
            </h3>
            <p className="text-muted-foreground">
              Bonzo Finance flash loans enable capital-efficient leveraged
              positions without requiring additional collateral.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <TrendingUp className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Concentrated Liquidity
            </h3>
            <p className="text-muted-foreground">
              SaucerSwap V2 concentrated liquidity positions maximize capital
              efficiency and trading fee earnings.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <Database className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-muted-foreground">
              Envio indexes every LP position, hedge, and IL metric instantly.
              Monitor your protection status in real-time.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-accent/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-shadow">
              <Bot className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Optimized Ranges</h3>
            <p className="text-muted-foreground">
              Chat with our AI agent to calculate optimal tick ranges based on
              volatility and liquidity depth analysis.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <Lock className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategy Encryption</h3>
            <p className="text-muted-foreground">
              Lit Protocol encrypts custom hedging parameters and proprietary IL
              protection algorithms for privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            The IL Protection Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            Mathematical hedging strategy that protects your liquidity positions
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-primary-glow" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  79/21 Capital Allocation
                </h3>
                <p className="text-muted-foreground">
                  Optimized split: 79% in SaucerSwap V2 LP earning fees, 21% in
                  leveraged shorts hedging price movements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Automated Rebalancing
                </h3>
                <p className="text-muted-foreground">
                  Flash loans from Bonzo Finance enable gas-efficient position
                  adjustments without requiring extra capital.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 text-primary-glow" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  MEV-Resistant Execution
                </h3>
                <p className="text-muted-foreground">
                  Hedera's fair transaction ordering ensures your hedges execute
                  at intended prices without front-running.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 rounded-2xl border border-primary/30 bg-gradient-to-b from-card to-background">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">LP Allocation</span>
                  <span className="text-2xl font-bold text-primary-glow">
                    79%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">
                    Hedge Allocation
                  </span>
                  <span className="text-2xl font-bold text-accent">21%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">Flash Loan Fee</span>
                  <span className="text-2xl font-bold text-primary-glow">
                    0.09%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">IL Protection</span>
                  <span className="text-2xl font-bold text-accent">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-background">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            Ready to Protect Your Liquidity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start earning LP fees without worrying about impermanent loss. Chat
            with our AI agent to deploy your first hedged position in minutes.
          </p>
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.5)] transition-all"
            onClick={() => (window.location.href = "/app")}
          >
            Launch SaucerHedge
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 SaucerHedge. Built for EthOnline Hackathon using Hedera,
            SaucerSwap V2, Bonzo Finance, Envio & Lit Protocol.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
