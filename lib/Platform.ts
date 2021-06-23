interface PlatformMap {
  [key: string]: React.ComponentType<{}>
}

let platform = process.env.NEXT_PUBLIC_PLATFORM as string

// This is only needed for changing the platform at runtime
export const switchPlatform = (newPlatform: string) => {
  platform = newPlatform
}

// Inspired by: https://reactnative.dev/docs/platform#select
export const Platform = {
  select: (map: PlatformMap): React.ComponentType<{}> => {
    return map[platform]
  }
}
