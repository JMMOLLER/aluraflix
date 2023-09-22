import styled from 'styled-components'

interface CardProps {
  img: string;
}

const StyledCard = styled.div`
  height: 163px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export default function index({ img }: CardProps) {
  return (
    <StyledCard>
      <img src={img} alt="video thumbnail" />
    </StyledCard>
  )
}

