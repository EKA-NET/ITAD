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