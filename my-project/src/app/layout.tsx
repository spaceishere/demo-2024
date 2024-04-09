"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <body className={`${inter.className} w-full h-screen flex items-center justify-center`}>{children}</body>
    </ApolloProvider>
  );
}
