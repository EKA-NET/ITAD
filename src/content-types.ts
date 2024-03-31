import type { ImageMetadata } from "astro"

export interface CompanyInfo {
  name: string
  short: string
  logo: string
  socials: CompanySocial[]
}

export interface CompanySocial {
  icon: string
  link: string
}

export interface AboutInfo {
  title: string
  content: string
  imageSrc: ImageMetadata
}