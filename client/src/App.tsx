import { gql, useMutation, useQuery } from "@apollo/client";
import "./App.css";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";

const GET_USERS = gql`
  query GetUSers {
    users {
      id
      firstName
      lastName
      age
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($input: CreateUserDTO!) {
    create(CreateUserDTO: $input) {
      id
      firstName
      lastName
      age
    }
  }
`;

function App() {
  const { data } = useQuery(GET_USERS);
  const [addUser, { error }] = useMutation(ADD_USER, {
    refetchQueries: [GET_USERS],
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });

  function onSubmit(values: any) {
    try {
      addUser({
        variables: { input: { ...values, age: parseInt(values.age) } },
      });

      form.reset({});
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <div className="px-4 py-3 flex flex-col gap-8">
      <div className="w-72 self-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FirstName</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LastName</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      {error && <h1>{JSON.stringify(error)}</h1>}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>FistName</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {((data && data.users) || []).map((user: any) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell className="text-right">{user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
