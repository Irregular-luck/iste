import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2026-02-23', 
})

// Helper to turn Sanity image references into URLs
const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}