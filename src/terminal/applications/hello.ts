import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function hello(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "hello",
    short: "friendly greeting program",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }

    print("\nAminci OS online. Welcome to the project archive.");
  };
  return { docs, app };
}
