import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Support resources and documentation for VLXTR platform</p>
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about using the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I add a new printer?</AccordionTrigger>
                  <AccordionContent>
                    To add a new printer, navigate to the Printers page and click the "Add Printer" button. You'll need
                    to provide the printer's IP address, serial number, and access code. These can typically be found in
                    your printer's settings menu or documentation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I track filament usage?</AccordionTrigger>
                  <AccordionContent>
                    Filament usage is automatically tracked for each print job. You can view detailed filament usage
                    statistics in the Analytics section. For manual tracking, you can update filament levels in the
                    Inventory section of the Printers page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I schedule maintenance for my printers?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can schedule maintenance tasks for your printers in the Maintenance Schedule section of the
                    Printers page. You can set up recurring maintenance tasks and receive notifications when maintenance
                    is due.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I manage my subscription?</AccordionTrigger>
                  <AccordionContent>
                    You can manage your subscription in the Billing tab of your Account settings. There you can change
                    your plan, update payment methods, and view your billing history.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I export analytics data?</AccordionTrigger>
                  <AccordionContent>
                    You can export analytics data by navigating to the Analytics page and using the "Export" button in
                    the top right corner of each chart or table. Data can be exported in CSV, Excel, or PDF formats.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Guides</CardTitle>
              <CardDescription>Step-by-step guides to help you get the most out of the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Getting Started Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Learn the basics of setting up your account and connecting your first printer.
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Print Queue Management</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Learn how to efficiently manage your print queue and prioritize jobs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Inventory Management</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Track and manage your filament and other supplies effectively.
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Analytics & Reporting</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Get insights from your printing data with advanced analytics tools.
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Team Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Learn how to effectively collaborate with team members on projects.
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Advanced Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Customize the platform to meet your specific workflow needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch step-by-step video guides for using the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="font-medium mb-2">Getting Started with VLXTR</h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: 5:32</p>
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="font-medium mb-2">Advanced Printer Management</h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: 8:15</p>
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="font-medium mb-2">Analyzing Print Performance</h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: 6:47</p>
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="font-medium mb-2">Optimizing Workflow</h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: 7:23</p>
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe your issue in detail"
                  ></textarea>
                </div>
              </div>
              <Button className="w-full md:w-auto">Submit Support Request</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
