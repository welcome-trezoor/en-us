import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet, ChevronDown, Github, Twitter } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBox from './components/AnimatedBox';
import { useInView } from 'react-intersection-observer';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Military-grade encryption protecting your assets"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Storage",
      description: "Cold storage solution for maximum protection"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Multi-Currency Support",
      description: "Manage multiple cryptocurrencies in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center animated-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Welcome to Trezor Suite
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            The Next Generation of Crypto Asset Management
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedBox key={index} className="p-6 rounded-lg neon-border">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </AnimatedBox>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
          >
            The Ultimate Guide to Setting Up Your Trezor Wallet
          </motion.h2>

          <div className="prose prose-invert max-w-none">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-8 text-lg"
            >
              If you're looking to start your journey into cryptocurrency security, <strong className="text-purple-400">Trezor.io/start</strong> is the perfect place to begin. As one of the most trusted brands in hardware wallets, Trezor makes it easy to securely store and manage your digital assets.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            >
              Getting Started with Trezor.io/start
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 mb-8"
            >
              To begin, visit <strong className="text-purple-400">Trezor.io/start</strong>, which is the official setup page for your <strong className="text-purple-400">Trezor hardware wallet</strong>. The page provides detailed instructions to guide you through the installation of <strong className="text-purple-400">Trezor Suite</strong>, a desktop application for managing your wallet.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            >
              Connecting with Trezor Bridge
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 mb-8"
            >
              After setting up your wallet, you may also need to install <strong className="text-purple-400">Trezor Bridge</strong>. This software acts as a bridge between your Trezor device and your computer, enabling you to access and manage your digital assets securely.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            >
              Trezor Hardware Wallet: Your Digital Asset Guardian
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 mb-8"
            >
              The <strong className="text-purple-400">Trezor hardware wallet</strong> is a physical device designed to store your private keys offline, offering unparalleled protection against online threats such as hacking and phishing attacks.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            >
              Trezor Staking: Earning Rewards with Your Crypto
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 mb-8"
            >
              Another exciting feature available through Trezor is <strong className="text-purple-400">Trezor Staking</strong>. Staking allows you to participate in proof-of-stake (PoS) networks and earn rewards by holding your assets in a staking wallet.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;