import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// ;(async () => {
//   const blockId = '8418b49d75654f188f2b67373b67746b';
//   const response = await notion.blocks.children.list({
//     block_id: blockId,
//     page_size: 50,
//   });
//   console.log(JSON.stringify(response));

//   // const blockId2 = response.results[0].id;
//   // const response2 = await notion.blocks.retrieve({
//   //     block_id: blockId2,
//   // });
//   // console.log(`----`)
//   // console.log(response2.paragraph);
// })();

export default function Home() {
  return (
    <main>
      <p>hello</p>
      <Button>Click me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
