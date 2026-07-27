"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldCheck, LogOut, Check, RefreshCw } from "lucide-react";
import { API_BASE_URL } from "@/lib/config";

interface Lead {
  _id: string;
  name: string;
  email: string;
  company: string;
  serviceRequested: string;
  budgetRange: string;
  projectDetails: string;
  status: "new" | "contacted" | "reviewing" | "proposal-sent" | "won" | "lost";
  internalNotes?: string;
  createdAt: string;
}

interface Subscriber {
  _id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [dataError, setDataError] = useState("");

  // Check existing credentials on mount
  useEffect(() => {
    const token = localStorage.getItem("creovix_admin_token");
    if (token) {
      setIsAuthenticated(true);
      fetchDashboardData(token);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem("creovix_admin_token", "dummy-jwt-token"); // We set a local token
        fetchDashboardData("dummy-jwt-token");
      } else {
        setLoginError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      setLoginError("Cannot connect to authorization server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("creovix_admin_token");
    setIsAuthenticated(false);
    setLeads([]);
    setSubscribers([]);
  };

  const fetchDashboardData = async (token: string) => {
    setIsLoadingData(true);
    setDataError("");
    try {
      // Fetch Leads
      const leadsRes = await fetch(`${API_BASE_URL}/api/v1/leads`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const leadsData = await leadsRes.json();

      if (leadsRes.ok) {
        setLeads(leadsData.data || []);
      } else {
        setDataError("Failed to fetch CRM leads.");
      }

      // Fetch Subscribers
      const subsRes = await fetch(`${API_BASE_URL}/api/v1/newsletter/subscribers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const subsData = await subsRes.json();
      if (subsRes.ok) {
        setSubscribers(subsData.data || []);
      }
    } catch (err) {
      console.error(err);
      setDataError("Unable to connect to CRM database API.");
    } finally {
      setIsLoadingData(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    const token = localStorage.getItem("creovix_admin_token") || "";
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/leads/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setLeads((prev) =>
          prev.map((lead) => (lead._id === id ? { ...lead, status: newStatus as Lead["status"] } : lead))
        );
      } else {
        alert("Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      alert("Error contacting API server.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100 flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {!isAuthenticated ? (
            /* Login Portal */
            <div className="mx-auto max-w-md mt-12">
              <form
                onSubmit={handleLogin}
                className="rounded-sm border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col gap-6"
              >
                <div className="text-center">
                  <ShieldCheck className="mx-auto h-10 w-10 text-emerald-500" />
                  <h1 className="font-heading text-lg font-bold text-zinc-100 mt-4">
                    Admin Portal Login
                  </h1>
                  <p className="text-[10px] text-zinc-500 mt-1">
                    Enter credentials to access the lead database.
                  </p>
                </div>

                {loginError && (
                  <div className="rounded-sm border border-red-950 bg-red-950/20 p-3 text-xs text-red-400 text-center">
                    {loginError}
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="admin-email" className="text-xs font-semibold text-zinc-400">Email Address</label>
                  <input
                    id="admin-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 rounded-sm border border-zinc-900 bg-zinc-950 px-3 text-xs text-zinc-200 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    placeholder="admin@creovix.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="admin-password" className="text-xs font-semibold text-zinc-400">Security Password</label>
                  <input
                    id="admin-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 rounded-sm border border-zinc-900 bg-zinc-950 px-3 text-xs text-zinc-200 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    placeholder="••••••••"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} variant="primary" size="lg" className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                    </span>
                  ) : (
                    "Access CRM Database"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            /* Dashboard View */
            <div className="flex flex-col gap-10">
              {/* Header Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900 pb-6">
                <div>
                  <h1 className="font-heading text-2xl font-bold tracking-tight text-zinc-100">
                    Lead & CRM Dashboard
                  </h1>
                  <p className="text-[10px] text-zinc-500 mt-1">
                    Manage client requests and track newsletter subscribers.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => fetchDashboardData(localStorage.getItem("creovix_admin_token") || "")}
                    variant="secondary"
                    size="sm"
                    className="gap-1.5"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Refresh
                  </Button>
                  <Button onClick={handleLogout} variant="ghost" size="sm" className="gap-1.5 text-zinc-500 hover:text-red-400">
                    <LogOut className="h-3.5 w-3.5" /> Logout
                  </Button>
                </div>
              </div>

              {/* CRM Key metrics */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-sm border border-zinc-900 bg-zinc-950/20 p-5">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Total Inquiries</p>
                  <p className="text-2xl font-extrabold text-emerald-400 mt-1">{leads.length}</p>
                </div>
                <div className="rounded-sm border border-zinc-900 bg-zinc-950/20 p-5">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">New Leads</p>
                  <p className="text-2xl font-extrabold text-emerald-400 mt-1">
                    {leads.filter((l) => l.status === "new").length}
                  </p>
                </div>
                <div className="rounded-sm border border-zinc-900 bg-zinc-950/20 p-5">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Newsletter Lists</p>
                  <p className="text-2xl font-extrabold text-emerald-400 mt-1">{subscribers.length}</p>
                </div>
              </div>

              {/* Leads Table */}
              <div className="rounded-sm border border-zinc-900 bg-zinc-950/20 overflow-hidden">
                <div className="border-b border-zinc-900 bg-zinc-950/40 px-6 py-4">
                  <h2 className="font-heading text-sm font-semibold text-zinc-200">Scoping Submissions</h2>
                </div>
                <div className="overflow-x-auto">
                  {isLoadingData ? (
                    <div className="flex h-48 items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-emerald-500" />
                    </div>
                  ) : dataError ? (
                    <p className="p-6 text-center text-xs text-red-400">{dataError}</p>
                  ) : leads.length === 0 ? (
                    <p className="p-6 text-center text-xs text-zinc-500">No project lead submissions yet.</p>
                  ) : (
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-zinc-900 text-zinc-500 bg-zinc-950/10">
                          <th className="px-6 py-3">Client Details</th>
                          <th className="px-6 py-3">Requested Service</th>
                          <th className="px-6 py-3">Budget</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-900 text-zinc-300">
                        {leads.map((lead) => (
                          <tr key={lead._id} className="hover:bg-zinc-900/10">
                            <td className="px-6 py-4">
                              <p className="font-semibold text-zinc-200">{lead.name}</p>
                              <p className="text-[10px] text-zinc-500">{lead.email}</p>
                              {lead.company && <p className="text-[10px] text-zinc-500">Co: {lead.company}</p>}
                            </td>
                            <td className="px-6 py-4 capitalize">{lead.serviceRequested.replace("-", " ")}</td>
                            <td className="px-6 py-4 font-mono font-semibold">{lead.budgetRange}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-block px-2 py-0.5 text-[9px] font-bold rounded-full uppercase ${
                                  lead.status === "new"
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : lead.status === "won"
                                    ? "bg-blue-500/10 text-blue-400"
                                    : lead.status === "lost"
                                    ? "bg-zinc-800 text-zinc-500"
                                    : "bg-amber-500/10 text-amber-400"
                                }`}
                              >
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <select
                                value={lead.status}
                                onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                                className="bg-zinc-950 border border-zinc-900 text-[10px] rounded-sm p-1 text-zinc-400 focus:outline-none focus:border-emerald-600"
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="reviewing">Reviewing</option>
                                <option value="won">Won</option>
                                <option value="lost">Lost</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              {/* Subscribers List */}
              <div className="rounded-sm border border-zinc-900 bg-zinc-950/20 overflow-hidden">
                <div className="border-b border-zinc-900 bg-zinc-950/40 px-6 py-4">
                  <h2 className="font-heading text-sm font-semibold text-zinc-200">Newsletter subscribers</h2>
                </div>
                <div className="p-6">
                  {subscribers.length === 0 ? (
                    <p className="text-center text-xs text-zinc-500">No active newsletter subscribers.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {subscribers.map((sub) => (
                        <div
                          key={sub._id}
                          className="flex items-center justify-between rounded-sm border border-zinc-900 bg-zinc-950/50 p-3 text-xs"
                        >
                          <span className="truncate text-zinc-300 pr-2">{sub.email}</span>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                            <Check className="h-3 w-3" />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
