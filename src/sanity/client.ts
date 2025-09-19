import { createClient } from "next-sanity";
import { loadEnvConfig } from '@next/env'
const projectDir = process.cwd()
loadEnvConfig(projectDir)

export const client = createClient({
  projectId: process.env.SANITY_ID ,
  dataset: "production",
  apiVersion: "2025-09-05",
  useCdn: false,
});

