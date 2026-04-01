interface Props {
  image: string;
  alt?: string;
}

const WorkImage = ({ image, alt = "" }: Props) => {
  return (
    <div className="work-image">
      <div className="work-image-in">
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

export default WorkImage;
