"use client"

import { Analytics } from "@vercel/analytics/next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Scroll-based Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: scrollY > 600 ? "#000000" : "#ffffff",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Always White Background */}
        <section className="px-[10%] py-24 md:py-32 bg-white">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
                Hi, I'm <span>Nigel Koh</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-800">
                I'm a frontend developer and WordPress specialist with experience in building responsive websites with
                WordPress, Shopify, and modern tools like React and Next.js to bring ideas to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-black text-black hover:bg-gray-100"
                asChild
              >
                <Link href="#projects">Check Out My Experience</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section - Transition Point */}
        <section id="about" className="px-[10%] py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter transition-colors duration-500"
                  style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                >
                  About Me
                </h2>
                <p className="transition-colors duration-500" style={{ color: scrollY > 600 ? "#d1d5db" : "#374151" }}>
                  Get to know me better
                </p>
              </div>
              <div className="space-y-4">
                <p className="transition-colors duration-500" style={{ color: scrollY > 600 ? "#e5e7eb" : "#1f2937" }}>
                  I'm an aspiring WordPress developer currently in my final year of BSIT at Lyceum of the Philippines
                  University – Cavite. I enjoy building responsive and user-friendly websites from scratch and have
                  hands-on experience in theme and plugin development, SEO optimization, and website customization.
                </p>
                <p className="transition-colors duration-500" style={{ color: scrollY > 600 ? "#e5e7eb" : "#1f2937" }}>
                  I've worked on various web projects—from setting up websites through cPanel, managing domains, and
                  integrating Google Analytics, to building full sites from scratch. I'm also experienced in using task
                  management tools to stay organized and deliver results efficiently.
                </p>
                <p className="transition-colors duration-500" style={{ color: scrollY > 600 ? "#e5e7eb" : "#1f2937" }}>
                  Outside of coding, I love exploring new tech, playing video games, and staying active through
                  basketball and workouts. I'm always looking to improve my skills and grow in fast-paced, creative
                  environments.
                </p>
              </div>
              <Button
                className={`transition-colors duration-500 ${
                  scrollY > 600 ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                }`}
                asChild
              >
                <Link href="https://fuchsia-rory-70.tiiny.site/" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3
                  className="text-xl font-semibold transition-colors duration-500"
                  style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                >
                  Skills & Technologies
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4
                    className="font-medium mb-2 transition-colors duration-500"
                    style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                  >
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                      "WordPress Core",
                      "PHP",
                      "JavaScript",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        className={`transition-colors duration-500 ${
                          scrollY > 600
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4
                    className="font-medium mb-2 transition-colors duration-500"
                    style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                  >
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"].map((skill) => (
                      <Badge
                        key={skill}
                        className={`transition-colors duration-500 ${
                          scrollY > 600
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4
                    className="font-medium mb-2 transition-colors duration-500"
                    style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                  >
                    Theme & Plugin Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Custom Themes",
                      "Custom Plugins",
                      "ACF (Advanced Custom Fields)",
                      "Elementor",
                      "WooCommerce",
                      "WPBakery",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        className={`transition-colors duration-500 ${
                          scrollY > 600
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4
                    className="font-medium mb-2 transition-colors duration-500"
                    style={{ color: scrollY > 600 ? "#ffffff" : "#000000" }}
                  >
                    Tools & Others
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "LocalWP",
                      "cPanel",
                      "FTP / FileZilla",
                      "phpMyAdmin",
                      "SEO Plugins (Yoast, Rank Math)",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        className={`transition-colors duration-500 ${
                          scrollY > 600
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Black Background */}
        <section id="projects" className="px-[10%] py-24">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white">Work Experience</h2>
              <p className="text-gray-300">Companies where I applied and developed my skills.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <div className="aspect-video bg-muted">
                  <Image
                    src="https://onlinephilippines.com.ph//wp-content/webpc-passthru.php?src=https://onlinephilippines.com.ph/wp-content/uploads/2022/10/238x53.png&nocache=1"
                    alt="Online Philippines Corp"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Online Philippines Corp.</CardTitle>
                  <CardTitle className="text-sm text-gray-300">WP Developer Intern (3 months)</CardTitle>
                  <CardDescription className="text-gray-400">
                    Online Philippines Corp. is an integrated digital marketing agency in the Philippines committed to
                    boosting your business by building your online presence.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Theme development",
                      "Website customization",
                      "SEO optimization",
                      "Website performance optimization",
                      "Analytics and tracking",
                      "Website migration",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-white/5 text-white border-white/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
<Card className="overflow-hidden bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <div className="aspect-video bg-muted">
                  <Image
                    src="/images/design-mode/darklogo.png"
                    alt="Online Philippines Corp"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Madison 88 Business Solutions Inc.</CardTitle>
                  <CardTitle className="text-sm text-gray-300">FullStack Developer Intern</CardTitle>
                  <CardDescription className="text-gray-400">
                    Developed HRIS System & ATS - Employee and Employment management system that have an integrations with Microsoft GRAPH for MS Teams scheduling and setting up meetings. A Dinamic Website that has dynamic pages including career page.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Theme development",
                      "Website customization",
                      "SEO optimization",
                      "Website performance optimization",
                      "Analytics and tracking",
                      "Website migration",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-white/5 text-white border-white/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-black">Digital Creatives PAJ</h3>
                    <p className="text-sm text-black-300">Web Design & Branding</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Digital Creatives PAJ Web Design and Branding Solutions</CardTitle>
                  <CardTitle className="text-sm text-gray-300">WP Developer (1 year 3 mo)</CardTitle>
                  <CardDescription className="text-gray-400">
                    A digital marketing company based in the Philippines.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Web development",
                      "Scratch to Fully Functioning Website",
                      "Plugin development",
                      "Website customization",
                      "Domain management",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-white/5 text-white border-white/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <div className="aspect-video bg-muted">
                  <Image
                    src="https://www.markadongpinoy.com/cape-logo.png"
                    alt="Markadong Pinoy"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Thesis: Markadong Pinoy</CardTitle>
                  <CardTitle className="text-sm text-gray-300">Front-end & Backend Developer</CardTitle>
                  <CardDescription className="text-gray-400">
                    A CMS platform that serves local MSMEs in Imus Cavite.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {["React.js", "Next.js", "Nest.js", "Bootstrap", "JavaScript", "Amazon Web Service"].map(
                      (skill) => (
                        <Badge key={skill} variant="outline" className="text-xs bg-white/5 text-white border-white/20">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section - Black Background */}
        <section id="contact" className="px-[10%] py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white">Get In Touch</h2>
              <p className="text-gray-300">I'm always open to discussing new opportunities and interesting projects</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">nigelkoh03@gmail.com</p>
                  <Button className="mt-4 bg-white text-black hover:bg-gray-200" asChild>
                    <Link href="mailto:nigelkoh03@gmail.com">Send Email</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Connect with me professionally</p>
                  <Button
                    className="mt-4 bg-transparent border-white text-white hover:bg-white/10"
                    variant="outline"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/kohnigel/" target="_blank">
                      View Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer - Black Background */}
        <footer className="py-12 border-t border-white/20">
          <div className="px-[10%] text-center">
            <p className="text-gray-400">© 2025 NK. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
