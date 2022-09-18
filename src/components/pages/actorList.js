import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ActorList = () => (
    <Card.Group>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY209_CR5,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to=''>Jack Nicholson</Card.Header>
            <Card.Description>
            Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee.
            </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY209_CR65,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to='' >Marlon Brando</Card.Header>
            <Card.Description>
            Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem. 
            </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to='' >Robert De Niro</Card.Header>
            <Card.Description>
            One of the greatest actors of all time, Robert De Niro was born on August 17, 1943 in Manhattan, New York City, to artists Virginia (Admiral).
            </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX140_CR0,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to='' >Al Pacino</Card.Header>
            <Card.Description>
            Alfredo James "Al" 'Pacino established himself as a film actor during one of cinema's most vibrant decades, the 1970s, and has become an enduring and iconic figure in the world of American movies.
            </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY209_CR9,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to='' >Daniel Day-Lewis</Card.Header>
            <Card.Description>
            Born in London, England, Daniel Michael Blake Day-Lewis is the second child of Cecil Day-Lewis (pseudonym Cecil Day-Lewis), Poet Laureate of the U.K., and his second wife, actress Jill Balcon.
            </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Card.Content>
            <Image
            floated='right'
            size='large'
            src='https://m.media-amazon.com/images/M/MV5BMTc3NzU0ODczMF5BMl5BanBnXkFtZTcwODEyMDY5Mg@@._V1_UY209_CR8,0,140,209_AL_.jpg'
            />
            <Card.Header as={Link} to='' >Dustin Hoffman</Card.Header>
            <Card.Description>
            Dustin Lee Hoffman was born in Los Angeles, California, to Lillian (Gold) and Harry Hoffman, who was a furniture salesman and prop supervisor for Columbia Pictures.
            </Card.Description>
        </Card.Content>
        </Card>
  </Card.Group>
)

export default ActorList;