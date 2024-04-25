"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const zodSchema = z.object({
  search: z.optional(z.string().default("")),
});

const SearchBar = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (state: Zod.infer<typeof zodSchema>) => {};

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="search" {...register("search")} />
      </form>
    </div>
  );
};

export default SearchBar;
