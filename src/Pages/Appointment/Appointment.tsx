import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import * as React from "react";
import { useTranslation } from "@/Hooks/useTranslation";
import { Calendar1, Clock, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export function Appointment() {
    const { t, isBangla } = useTranslation();

    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )
    const [selectedTime, setSelectedTime] = React.useState<string | null>("10:00")
    const timeSlots = Array.from({ length: 37 }, (_, i) => {
        const totalMinutes = i * 15
        const hour = Math.floor(totalMinutes / 60) + 9
        const minute = totalMinutes % 60
        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
    })
    const bookedDates = Array.from(
        { length: 3 },
        (_, i) => new Date(2025, 5, 17 + i)
    )

    return (
        <section id="appointment" className="py-16 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className={`text-3xl sm:text-4xl ${isBangla ? 'bangla' : ''}`}>{t("appointment.title")}</h2>
                    <p className={`text-lg text-white/90 ${isBangla ? 'bangla' : ''}`}>
                        {t("appointment.subtitle")}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 py-8">
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <Calendar1 className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className={`${isBangla ? 'bangla' : ''}`}>{t("appointment.flexible")}</h4>
                                <p className={`text-sm text-white/80 ${isBangla ? 'bangla' : ''}`}>{t("appointment.flexibleDesc")}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <Clock className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className={`${isBangla ? 'bangla' : ''}`}>{t("appointment.quick")}</h4>
                                <p className="text-sm text-white/80">{t("appointment.quickDesc")}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-white/10 rounded-full">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className={`${isBangla ? 'bangla' : ''}`}>{t("appointment.convenient")}</h4>
                                <p className="text-sm text-white/80">{t("appointment.convenientDesc")}</p>
                            </div>
                        </div>
                    </div>

                    <Dialog>
                        <div>
                            <form>
                                <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className={`bg-white text-primary hover:bg-white/90 ${isBangla ? 'bangla' : ''}`}
                                    >
                                        {t("appointment.button")}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <Card className="gap-0 p-0">
                                        <CardContent className="relative p-0 md:pr-48">
                                            <div className="p-6">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    defaultMonth={date}
                                                    disabled={bookedDates}
                                                    showOutsideDays={false}
                                                    modifiers={{
                                                        booked: bookedDates,
                                                    }}
                                                    modifiersClassNames={{
                                                        booked: "[&>button]:line-through opacity-100",
                                                    }}
                                                    className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                                                    formatters={{
                                                        formatWeekdayName: (date) => {
                                                            return date.toLocaleString("en-US", { weekday: "short" })
                                                        },
                                                    }}
                                                />
                                            </div>
                                            <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
                                                <div className="grid gap-2">
                                                    {timeSlots.map((time) => (
                                                        <Button
                                                            key={time}
                                                            variant={selectedTime === time ? "default" : "outline"}
                                                            onClick={() => setSelectedTime(time)}
                                                            className="w-full shadow-none"
                                                        >
                                                            {time}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
                                            <div className="text-sm">
                                                {date && selectedTime ? (
                                                    <>
                                                        Your meeting is booked for{" "}
                                                        <span className="font-medium">
                                                            {" "}
                                                            {date?.toLocaleDateString("en-US", {
                                                                weekday: "long",
                                                                day: "numeric",
                                                                month: "long",
                                                            })}{" "}
                                                        </span>
                                                        at <span className="font-medium">{selectedTime}</span>.
                                                    </>
                                                ) : (
                                                    <>Select a date and time for your meeting.</>
                                                )}
                                            </div>
                                            <Button type="submit"
                                                disabled={!date || !selectedTime}
                                                className="w-full md:ml-auto md:w-auto"
                                                variant="outline"
                                            >
                                                Continue
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </form>

                        </div>
                    </Dialog>

                    <p className={`text-sm text-white/70 ${isBangla ? 'bangla' : ''}`}>
                        {t("appointment.call")} <span className="text-white">+1 (555) 123-4567</span>
                    </p>
                </div>
            </div>
        </section>
    );
}