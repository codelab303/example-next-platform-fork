interface PlatformMap {
  [key: string]: React.ComponentType<{}>
}

let platform = process.env.NEXT_PUBLIC_PLATFORM as string

// This is only needed for changing the platform at runtime
export const switchPlatform = (newPlatform: string) => {
  platform = newPlatform
}

export const Platform = {
  select: (map: PlatformMap): React.ComponentType<{}> => {
    return map[platform]
  }
}
