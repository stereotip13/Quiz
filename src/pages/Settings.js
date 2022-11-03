import { Button, CircularProgress, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'

const Settings = () => {
  const { response, error, loading } = useAxios({ url: '/api_category.php' })
  const navigate = useNavigate()
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Ошибка!!!
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ]
  const typeOptions = [
    { id: 'multiple', name: 'Multiple Choise' },
    { id: 'boolean', name: 'True/False' },
  ]
  const handleSubmit = (e) => {
    //e.prevetntDefault()
    navigate('/questions', { replace: true })
  }
  return (
    <>
      <Typography variant="h2" fontWeight="bold">
        Quiz APP
      </Typography>
      <Link href="/questions">Questions</Link>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  )
}
export default Settings
