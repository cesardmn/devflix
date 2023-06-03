// // react
// import { useState } from 'react'

// // styles
// import styles from '@styles/Video.module.css'
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
// import MenuItem from '@mui/material/MenuItem'
// import Layout from '@src/components/Layout'

// // providers
// import { useDb } from '@providers/DbProvider'

// export default function Video() {
//   const [url, setUrl] = useState('')
//   const [error, setError] = useState(false)
//   const [language, setLanguage] = useState('')
//   const router = useRouter()

//   const { db, setDb } = useDb()

//   const validateUrl = (url) => {
//     const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
//     return youtubeRegex.test(url)
//   }

//   const handleFormSubmit = (event) => {
//     event.preventDefault()
//     const isValidUrl = validateUrl(url)
//     setError(!isValidUrl)

//     if (isValidUrl) {
//       try {
//         const match = url.match(
//           /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/e\/|\/watch\?v=|\/embed\/|\.be\/|\/v\/|\/e\/)([\w\-]{11})/
//         )
//         const videoId = match && match[1]
//         const url = `${process.env.YOUTUBE_BASE_URL}${videoId}&key=${process.env.YOUTUBE_API_KEY}`

//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             const dataVideo = {
//               id: videoId,
//               title: data.items[0].snippet.title,
//               description: data.items[0].snippet.description,
//               thumb: data.items[0].snippet.thumbnails.standard.url,
//               cat: language,
//             }

//             setDb([dataVideo, ...db])
//             localStorage.setItem('localDB', JSON.stringify([dataVideo, ...db]))
//           })
//         router.push('./')
//       } catch (error) {}
//     }
//   }

//   const handleUrlChange = (event) => {
//     setUrl(event.target.value)
//     setError(false) // Reset the error state when the URL changes
//   }

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value)
//   }

//   return (
//     <Layout>
//       <form onSubmit={handleFormSubmit} className={styles.videoForm}>
//         <Box
//           sx={{
//             width: 500,
//             maxWidth: '100%',
//           }}
//         >
//           <TextField
//             fullWidth
//             label="YouTube URL"
//             id="url"
//             error={error} // Set error state based on the error variable
//             helperText={error ? 'Invalid YouTube URL' : ''}
//             value={url}
//             onChange={handleUrlChange}
//             className={styles.textField}
//           />
//           <TextField
//             fullWidth
//             id="Language"
//             select
//             label="Linguagem"
//             onChange={handleLanguageChange}
//             sx={{ marginTop: '3rem' }}
//           >
//             <MenuItem value="">Selecione uma linguagem</MenuItem>
//             <MenuItem value="Assembly">Assembly</MenuItem>
//             <MenuItem value="C">C</MenuItem>
//             <MenuItem value="C++">C++</MenuItem>
//             <MenuItem value="C#">C#</MenuItem>
//             <MenuItem value="CSS">CSS</MenuItem>
//             <MenuItem value="Delphi">Delphi</MenuItem>
//             <MenuItem value="Go">Go</MenuItem>
//             <MenuItem value="Groovy">Groovy</MenuItem>
//             <MenuItem value="Haskell">Haskell</MenuItem>
//             <MenuItem value="HTML">HTML</MenuItem>
//             <MenuItem value="Java">Java</MenuItem>
//             <MenuItem value="JavaScript">JavaScript</MenuItem>
//             <MenuItem value="Kotlin">Kotlin</MenuItem>
//             <MenuItem value="Lua">Lua</MenuItem>
//             <MenuItem value="Matlab">Matlab</MenuItem>
//             <MenuItem value="Objective-C">Objective-C</MenuItem>
//             <MenuItem value="Perl">Perl</MenuItem>
//             <MenuItem value="PHP">PHP</MenuItem>
//             <MenuItem value="PowerShell">PowerShell</MenuItem>
//             <MenuItem value="Python">Python</MenuItem>
//             <MenuItem value="R">R</MenuItem>
//             <MenuItem value="Ruby">Ruby</MenuItem>
//             <MenuItem value="Rust">Rust</MenuItem>
//             <MenuItem value="Scala">Scala</MenuItem>
//             <MenuItem value="Shell">Shell</MenuItem>
//             <MenuItem value="SQL">SQL</MenuItem>
//             <MenuItem value="Swift">Swift</MenuItem>
//             <MenuItem value="TypeScript">TypeScript</MenuItem>
//             <MenuItem value="VB.NET">VB.NET</MenuItem>
//             <MenuItem value="Other">Outro</MenuItem>
//           </TextField>
//         </Box>
//         <button type="submit">Submit</button> {/* Example submit button */}
//       </form>
//     </Layout>
//   )
// }
