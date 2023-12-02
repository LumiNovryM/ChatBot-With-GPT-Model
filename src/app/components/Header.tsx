"use client"

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast'
import { useState } from "react";

export function Header() {

    const { toast } = useToast()

    const [openDialog, setOpenDialog] = useState(false)

    const copyPath = async () => {
        const textType = 'URL';
        const text = 'https://zyranova.vercel.app/';
        try {
            await navigator.clipboard.writeText(text);
            toast({
                description: `${textType} Copied!`,
            });
          } catch (error) {
            toast({
                description: `${textType} Cant Copied`,
            });
          }
    }

  return (
    <>
      <header className="absolute top-0 w-[80%] flex justify-between items-center p-[10px]">
        <h1 className="text-white text-[32px]">ZyraNova</h1>

        <div className="cursor-pointer" onClick={() => setOpenDialog(true)}>
            <Icons.info />
        </div>
      </header>

        <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-md bg-[#14201A] border-[#03B96B]">
            <DialogHeader>
            <DialogTitle className="text-white">ZyraNova ChatBot</DialogTitle>
            <DialogDescription className="text-white mt-[10px]">
                ZyroNova ChatBot adalah sebuah chatbot dengan model GPT, yaitu Generative Pre-trained Transformer dengan arsitektur Transformer dan NLP, Natural Language Processing. ZyroNova ChatBot menggunakan API dari OpenAI.
            </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                Link
                </Label>
                <Input
                className="border-[#03B96B] text-white rounded-[3px]"
                id="link"
                defaultValue="https://zyranova.vercel.app/"
                readOnly
                />
            </div>
            <Button type="submit" size="sm" className=" bg-[#03B96B] rounded-[3px] hover:bg-[#03B96B]" onClick={() => {
                copyPath()
                toast({
                    description: "Your message has been sent.",
                })
                }}>
                <span className="sr-only">Copy</span>
                <Icons.copy/>
            </Button>
            </div>
            <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
                <Button type="button" variant="secondary" className="bg-[#03B96B] rounded-[3px] hover:bg-[#03B96B]" onClick={() => setOpenDialog(false)}>
                <p className="text-white">Close</p>
                </Button>
            </DialogClose>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    </>
  );
}
