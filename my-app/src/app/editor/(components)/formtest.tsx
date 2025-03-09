"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
    Description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
        Description: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6 space-y-8">
        {/* First Form Field - Project Name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                
                {/* This should have the name of the project when it was started */}

                <Input placeholder="test name" {...field} />
              </FormControl>
              <FormDescription>
                This is your project's display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Second Form Field - Description */}
                <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                {/*  <Input className="h-32 w-full resize-none leading-tight" placeholder="What does this App do?" {...field} /> */}
               
                <textarea className="peer h-36 min-h-[100px] w-full resize-none rounded-md border border-input bg-transparent px-2 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-white focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" placeholder="What does this App do?" {...field}
                ></textarea>

              </FormControl>
              <FormDescription>
                This as a description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


