//react
import { useState } from 'react'

// styles
import styles from '@styles/Video.module.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// providers
import { useDb } from '@providers/DbProvider'
import { useUser } from '@providers/UserProvider'

export default function Form() {
  const languages = [
    'Assembly',
    'C',
    'C++',
    'C#',
    'CSS',
    'Delphi',
    'Go',
    'Groovy',
    'Haskell',
    'HTML',
    'Java',
    'JavaScript',
    'Kotlin',
    'Lua',
    'Matlab',
    'Objective',
    'Perl',
    'PHP',
    'PowerShell',
    'Python',
    'R',
    'Ruby',
    'Rust',
    'Scala',
    'Shell',
    'SQL',
    'Swift',
    'TypeScript',
    'VB .NET',
    'Other',
  ]
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)
  const [language, setLanguage] = useState('')

  const { user } = useUser()

  const validateUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    return youtubeRegex.test(url)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const isValidUrl = validateUrl(url)
    setError(!isValidUrl)

    if (isValidUrl) {
      try {
        const match = url.match(
          /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/e\/|\/watch\?v=|\/embed\/|\.be\/|\/v\/|\/e\/)([\w\-]{11})/
        )
        const videoId = match && match[1]

        fetch('/api/videos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user,
            videoId,
            language,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
    setError(false)
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
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
          error={error}
          helperText={error ? 'Invalid YouTube URL' : ''}
          value={url}
          onChange={handleUrlChange}
          className={styles.textField}
          required
        />
        <TextField
          fullWidth
          id="Language"
          select
          label="Linguagem"
          onChange={handleLanguageChange}
          sx={{ marginTop: '3rem' }}
          value={language}
          required
        >
          <MenuItem value="">Selecione uma linguagem</MenuItem>
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <button type="submit">Submit</button>
    </form>
  )
}
