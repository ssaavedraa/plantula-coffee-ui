export interface GalleryCardData {
  text: string
  imageUrl: string
  clickThrough?: {
    text: string,
    value: string
  }
}

export interface GalleryCardProps extends GalleryCardData {
  onHover: (newBackground: string) => void
}