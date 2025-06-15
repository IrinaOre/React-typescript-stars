import { Star } from "./Star";

type StarsProps = {
  count?: number;
};

export const Stars = ({ count }: StarsProps) => {
  count = typeof count !== "number" || count < 1 || count > 5 ? 0 : count;

  return (
    <ul className="card-body-stars">
      {[...Array(count)].map((el, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};
