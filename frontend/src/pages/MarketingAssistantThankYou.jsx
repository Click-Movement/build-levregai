import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, CalendarDays, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const EVENT = {
  title: 'Install Your AI Marketing Assistant',
  description:
    'Live 90-minute hands-on workshop. Build and install your own AI marketing assistant.\n\nJoin via Zoom: https://us02web.zoom.us/webinar/register/WN_2lvt4aiPSN6jMfYyxTSBww',
  location: 'Zoom Webinar',
  zoomUrl: 'https://us02web.zoom.us/webinar/register/WN_2lvt4aiPSN6jMfYyxTSBww',
  startUTC: '20260312T190000Z',
  endUTC: '20260312T203000Z',
  startYahoo: '20260312T190000Z',
  duration: '0130',
};

function buildGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${EVENT.startUTC}/${EVENT.endUTC}`,
    details: EVENT.description,
    location: EVENT.zoomUrl,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildYahooCalendarUrl() {
  const params = new URLSearchParams({
    v: '60',
    title: EVENT.title,
    st: EVENT.startYahoo,
    dur: EVENT.duration,
    desc: EVENT.description,
    in_loc: EVENT.zoomUrl,
  });
  return `https://calendar.yahoo.com/?${params.toString()}`;
}

function buildIcsContent() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//LevReg AI//Workshop//EN',
    'BEGIN:VEVENT',
    `DTSTART:${EVENT.startUTC}`,
    `DTEND:${EVENT.endUTC}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:${EVENT.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${EVENT.zoomUrl}`,
    `URL:${EVENT.zoomUrl}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}

const MarketingAssistantThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIcsDownload = useCallback(() => {
    const blob = new Blob([buildIcsContent()], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-marketing-assistant-workshop.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <>
      <Helmet>
        <title>You're Registered! — AI Marketing Assistant Workshop | LevReg.Ai</title>
        <meta name="description" content="You're registered for the Install Your AI Marketing Assistant workshop. Add it to your calendar." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/workshop/marketing-assistant/thank-you" />
      </Helmet>

      <div className="workshop-theme min-h-screen bg-background text-foreground">
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-20 h-20 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-foreground text-shadow-green">
              You're Registered!
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
              You're all set for the Install Your AI Marketing Assistant workshop.
            </p>

            {/* Event Details */}
            <Card className="bg-card border-2 border-primary/30 mb-10">
              <CardContent className="p-8">
                <h2 className="text-xl font-extrabold text-foreground mb-6">Event Details</h2>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-left max-w-sm mx-auto">
                  <p className="text-muted-foreground text-sm">Date</p>
                  <p className="text-foreground font-semibold text-sm">Thursday, March 12, 2026</p>
                  <p className="text-muted-foreground text-sm">Time</p>
                  <p className="text-foreground font-semibold text-sm">2:00 PM EST</p>
                  <p className="text-muted-foreground text-sm">Duration</p>
                  <p className="text-foreground font-semibold text-sm">90 minutes</p>
                  <p className="text-muted-foreground text-sm">Format</p>
                  <p className="text-foreground font-semibold text-sm">Live via Zoom</p>
                </div>
              </CardContent>
            </Card>

            {/* Add to Calendar */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <CalendarDays className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Add to Your Calendar</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={buildGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto glow-green-hover font-bold px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    Google Calendar
                  </Button>
                </a>
                <Button
                  size="lg"
                  onClick={handleIcsDownload}
                  className="glow-green-hover font-bold px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Outlook / Apple
                </Button>
                <a href={buildYahooCalendarUrl()} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto glow-green-hover font-bold px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    Yahoo Calendar
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              A confirmation email with the Zoom link has been sent to your inbox. If you don't see it, check your spam folder.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketingAssistantThankYou;
