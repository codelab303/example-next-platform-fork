import dynamic from "next/dynamic";
import { Platform } from "@/lib/Platform";

const FooBar = () => {
  const Component = Platform.select({
    foo: dynamic(() => import('./Foo')),
    bar: dynamic(() => import('./Bar'))
  });

  return <Component />;
}

export { FooBar }
