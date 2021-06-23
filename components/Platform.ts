interface PlatformMap {
  [key: string]: React.ComponentType<{}>
}

let platform = process.env.NEXT_PUBLIC_PLATFORM as string

export const switchPlatform = (newPlatform: string) => {
  platform = newPlatform
}

export const Platform = {
  select: (map: PlatformMap): React.ComponentType<{}> => {
    return map[platform]
  }
}
