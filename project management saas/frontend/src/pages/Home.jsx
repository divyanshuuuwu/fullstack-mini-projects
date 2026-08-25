import React from "react"
import { NavLink } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Menu,
  X,
  Zap,
  Users,
  LayoutDashboard,
  KanbanSquare,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"

const Home = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
              <Layers3 size={20} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Flowboard
            </span>

          </NavLink>


          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#features"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#workflow"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Workflow
            </a>

            <a
              href="#about"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              About
            </a>

          </div>


          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <NavLink
              to="/login"
              className="rounded-xl px-4 py-2 text-sm text-gray-300 transition hover:text-white"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Get started
            </NavLink>

          </div>


          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>


        {/* Mobile Navigation */}
        {menuOpen && (

          <div className="border-t border-white/5 bg-black px-6 py-6 md:hidden">

            <div className="flex flex-col gap-5">

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                Features
              </a>

              <a
                href="#workflow"
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                Workflow
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                About
              </a>

              <div className="flex gap-3 pt-3">

                <NavLink
                  to="/login"
                  className="flex-1 rounded-xl border border-white/10 py-3 text-center text-sm"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="flex-1 rounded-xl bg-white py-3 text-center text-sm font-semibold text-black"
                >
                  Get started
                </NavLink>

              </div>

            </div>

          </div>

        )}

      </nav>


      {/* ================= HERO ================= */}

      <main>

        <section className="relative flex min-h-screen items-center justify-center px-6 pt-32">

          {/* Background Glow */}

          <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              Built for teams that move fast

            </div>


            {/* Heading */}

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

              Your work.
              <br />

              <span className="text-gray-500">
                One clear flow.
              </span>

            </h1>


            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">

              Flowboard brings your projects, tasks, and team together
              in one simple workspace. Plan better, collaborate faster,
              and keep everything moving.

            </p>


            {/* CTA */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <NavLink
                to="/register"
                className="group flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
              >

                Start building for free

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </NavLink>


              <NavLink
                to="/login"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-medium text-white transition hover:bg-white/[0.07]"
              >
                Explore Flowboard
              </NavLink>

            </div>


            {/* Small Trust Text */}

            <p className="mt-6 text-xs text-gray-600">
              No credit card required · Simple setup · Built for modern teams
            </p>

          </div>

        </section>


        {/* ================= PRODUCT PREVIEW ================= */}

        <section className="relative px-6 pb-32">

          <div className="mx-auto max-w-6xl">

            <div className="relative rounded-2xl border border-white/10 bg-[#111111] p-2 shadow-2xl">

              {/* Window Header */}

              <div className="flex h-10 items-center gap-2 px-4">

                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

              </div>


              {/* Fake Dashboard */}

              <div className="grid min-h-[450px] grid-cols-[180px_1fr] overflow-hidden rounded-xl border border-white/5 bg-black">

                {/* Sidebar */}

                <div className="hidden border-r border-white/5 p-5 sm:block">

                  <div className="mb-8 flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
                      <Layers3 size={15} />
                    </div>

                    <span className="text-sm font-semibold">
                      Flowboard
                    </span>

                  </div>


                  <div className="space-y-2">

                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                      Dashboard
                    </div>

                    <div className="px-3 py-2 text-xs text-gray-600">
                      My Projects
                    </div>

                    <div className="px-3 py-2 text-xs text-gray-600">
                      My Team
                    </div>

                    <div className="px-3 py-2 text-xs text-gray-600">
                      Settings
                    </div>

                  </div>

                </div>


                {/* Dashboard */}

                <div className="p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-600">
                        Workspace
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        Good morning 👋
                      </h3>

                    </div>

                    <div className="h-9 w-9 rounded-full bg-white/10" />

                  </div>


                  {/* Stats */}

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                    {[
                      ["Projects", "12"],
                      ["Tasks", "48"],
                      ["Completed", "31"],
                      ["Team", "8"],
                    ].map(([label, value]) => (

                      <div
                        key={label}
                        className="rounded-xl border border-white/5 bg-white/[0.025] p-4"
                      >

                        <p className="text-xs text-gray-600">
                          {label}
                        </p>

                        <p className="mt-2 text-xl font-semibold">
                          {value}
                        </p>

                      </div>

                    ))}

                  </div>


                  {/* Projects */}

                  <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-5">

                    <div className="flex items-center justify-between">

                      <h4 className="text-sm font-semibold">
                        Recent Projects
                      </h4>

                      <span className="text-xs text-gray-600">
                        View all
                      </span>

                    </div>


                    <div className="mt-5 space-y-3">

                      {[
                        ["Website Redesign", "In progress", "68%"],
                        ["Mobile App", "In progress", "42%"],
                        ["Marketing Campaign", "Completed", "100%"],
                      ].map(([name, status, progress]) => (

                        <div
                          key={name}
                          className="flex items-center gap-4 rounded-lg border border-white/5 bg-black p-3"
                        >

                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                            <LayoutDashboard size={14} />
                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-xs font-medium">
                              {name}
                            </p>

                            <div className="mt-2 h-1 rounded-full bg-white/5">

                              <div
                                className="h-1 rounded-full bg-white"
                                style={{ width: progress }}
                              />

                            </div>

                          </div>

                          <span className="text-[10px] text-gray-600">
                            {status}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="border-t border-white/5 px-6 py-32"
        >

          <div className="mx-auto max-w-6xl">

            <div className="max-w-2xl">

              <p className="text-sm font-medium text-gray-500">
                EVERYTHING IN ONE PLACE
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Everything your team needs.
              </h2>

              <p className="mt-5 text-gray-500">
                No unnecessary complexity. Flowboard gives you the tools
                you actually need to organize and execute your work.
              </p>

            </div>


            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">

              <Feature
                icon={<KanbanSquare size={22} />}
                title="Project Management"
                description="Organize projects, track progress, and keep every task moving forward."
              />

              <Feature
                icon={<Users size={22} />}
                title="Team Collaboration"
                description="Bring your team together and make ownership clear across every project."
              />

              <Feature
                icon={<Zap size={22} />}
                title="Fast Workflow"
                description="Spend less time managing your tools and more time getting work done."
              />

            </div>

          </div>

        </section>


        {/* ================= WORKFLOW ================= */}

        <section
          id="workflow"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-6xl">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              <div>

                <p className="text-sm font-medium text-gray-500">
                  SIMPLE BY DESIGN
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  From idea to done.
                </h2>

                <p className="mt-6 leading-7 text-gray-500">
                  Flowboard keeps your workflow simple. Create a project,
                  build your team, break the work into tasks, and watch
                  everything come together.
                </p>


                <div className="mt-8 space-y-5">

                  <Step
                    number="01"
                    title="Create a project"
                    description="Set up your project and define what you're building."
                  />

                  <Step
                    number="02"
                    title="Build your team"
                    description="Invite members and give everyone clear ownership."
                  />

                  <Step
                    number="03"
                    title="Track the work"
                    description="Move tasks forward and see exactly what's happening."
                  />

                </div>

              </div>


              {/* Visual */}

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl" />

                <div className="relative rounded-2xl border border-white/10 bg-[#111111] p-6">

                  <div className="flex items-center justify-between border-b border-white/5 pb-5">

                    <div>

                      <p className="text-xs text-gray-600">
                        PROJECT
                      </p>

                      <h3 className="mt-1 font-semibold">
                        Website Redesign
                      </h3>

                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-400">
                      In Progress
                    </span>

                  </div>


                  <div className="mt-6 space-y-3">

                    {[
                      ["Research competitors", true],
                      ["Design landing page", true],
                      ["Build authentication", false],
                      ["Deploy application", false],
                    ].map(([task, completed]) => (

                      <div
                        key={task}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-black p-4"
                      >

                        <CheckCircle2
                          size={18}
                          className={completed ? "text-white" : "text-gray-700"}
                        />

                        <span
                          className={
                            completed
                              ? "text-sm text-gray-400 line-through"
                              : "text-sm text-gray-300"
                          }
                        >
                          {task}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          id="about"
          className="border-t border-white/5 px-6 py-32"
        >

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <ShieldCheck size={26} />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
              Ready to get things moving?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-gray-500">
              Create your workspace and start managing your projects
              with a workflow that stays out of your way.
            </p>

            <NavLink
              to="/register"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
            >

              Get started with Flowboard

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </NavLink>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <div className="flex items-center gap-2">

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
              <Layers3 size={15} />
            </div>

            <span className="text-sm font-semibold">
              Flowboard
            </span>

          </div>

          <p className="text-xs text-gray-600">
            © 2026 Flowboard. Built for better workflows.
          </p>

        </div>

      </footer>

    </div>
  )
}


/* ================= FEATURE COMPONENT ================= */

const Feature = ({ icon, title, description }) => {

  return (

    <div className="bg-[#111111] p-8">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>

    </div>

  )
}


/* ================= STEP COMPONENT ================= */

const Step = ({ number, title, description }) => {

  return (

    <div className="flex gap-4">

      <span className="text-xs font-medium text-gray-600">
        {number}
      </span>

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {description}
        </p>

      </div>

    </div>

  )
}


export default Home