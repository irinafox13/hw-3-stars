import Star from "./Star";
import type {StarType} from './StarType';

type Props = StarType
const Stars = ({count}: Props ) => {
    return (
        <ul className="card-body-stars u-clearfix">
            {[...Array(count)].map((star, index) => {
                return (
                    <Star
                        key={index}
                    />
                );
            })}
        </ul>
    ) 
}

export default Stars