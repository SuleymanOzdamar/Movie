import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MovieCards = () => (
    <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_FMjpg_UX1000_.jpg'
        />
        <Card.Header as={Link} to=''> Hotel Transylvania</Card.Header>
        <Card.Meta>Animasion Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://img-s1.onedio.com/id-54786ab9c06fa6cd17e9e19f/rev-0/w-620/f-jpg/s-69397f83e77339847157e67d832d2e7ac40ac58d.jpg'
        />
        <Card.Header as={Link} to='' >Interstellar</Card.Header>
        <Card.Meta>Science-Fiction Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://static.boxofficeturkiye.com/news/item/675/1429-cLnMM.jpg'
        />
        <Card.Header as={Link} to='' >John Wick</Card.Header>
        <Card.Meta>Action Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://upload.wikimedia.org/wikipedia/tr/thumb/8/86/Ace_ventura_when_nature_calls.jpg/220px-Ace_ventura_when_nature_calls.jpg'
        />
        <Card.Header as={Link} to='' >Ace Ventura</Card.Header>
        <Card.Meta>Comedy Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg'
        />
        <Card.Header as={Link} to='' >Thor</Card.Header>
        <Card.Meta>Fantastic Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://upload.wikimedia.org/wikipedia/tr/a/a1/Korku_Seans%C4%B1_2_afi%C5%9F.JPG'
        />
        <Card.Header as={Link} to='' >The Conjuring</Card.Header>
        <Card.Meta>Horror Movie</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Like
          </Button>
          <Button basic color='red'>
            Dislike
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default MovieCards