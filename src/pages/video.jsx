import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Layout from '@src/components/Layout'

import styles from '@styles/Video.module.css'

export default function Video() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)
  const [language, setLanguage] = useState('')

  const validateUrl = (url) => {
    // YouTube URL validation regex
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    return youtubeRegex.test(url)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() // Prevent the default form submission behavior
    const isValidUrl = validateUrl(url)
    setError(!isValidUrl) // Set error state based on YouTube URL validation
    // Handle the form submission logic here
    if (isValidUrl) {
      // URL is valid, proceed with the submission
      console.log('Form submitted successfully')
    } else {
      // URL is invalid, display an error message or take appropriate action
      console.log('Invalid URL')
    }
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
    setError(false) // Reset the error state when the URL changes
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <Layout>
      <form onSubmit={handleFormSubmit} className={styles.videoForm}>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField
            fullWidth
            label="YouTube URL"
            id="url"
            error={error} // Set error state based on the error variable
            helperText={error ? 'Invalid YouTube URL' : ''}
            value={url}
            onChange={handleUrlChange}
            className={styles.textField}
          />
          <TextField
            fullWidth
            id="Language"
            select
            label="Linguagem"
            onChange={handleLanguageChange}
            sx={{ marginTop: '3rem' }}
          >
            <MenuItem value="">Selecione uma linguagem</MenuItem>
            <MenuItem value="Assembly">Assembly</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            <MenuItem value="C#">C#</MenuItem>
            <MenuItem value="CSS">CSS</MenuItem>
            <MenuItem value="Delphi">Delphi</MenuItem>
            <MenuItem value="Go">Go</MenuItem>
            <MenuItem value="Groovy">Groovy</MenuItem>
            <MenuItem value="Haskell">Haskell</MenuItem>
            <MenuItem value="HTML">HTML</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Kotlin">Kotlin</MenuItem>
            <MenuItem value="Lua">Lua</MenuItem>
            <MenuItem value="Matlab">Matlab</MenuItem>
            <MenuItem value="Objective-C">Objective-C</MenuItem>
            <MenuItem value="Perl">Perl</MenuItem>
            <MenuItem value="PHP">PHP</MenuItem>
            <MenuItem value="PowerShell">PowerShell</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="R">R</MenuItem>
            <MenuItem value="Ruby">Ruby</MenuItem>
            <MenuItem value="Rust">Rust</MenuItem>
            <MenuItem value="Scala">Scala</MenuItem>
            <MenuItem value="Shell">Shell</MenuItem>
            <MenuItem value="SQL">SQL</MenuItem>
            <MenuItem value="Swift">Swift</MenuItem>
            <MenuItem value="TypeScript">TypeScript</MenuItem>
            <MenuItem value="VB.NET">VB.NET</MenuItem>
            <MenuItem value="Other">Outro</MenuItem>
          </TextField>
        </Box>
        <button type="submit">Submit</button> {/* Example submit button */}
      </form>
    </Layout>
  )
}