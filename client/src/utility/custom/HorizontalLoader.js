
import { Progress } from 'reactstrap';
const HorizontalLoader = ( { hidden } ) => {
    return (
        <div style={{ marginBottom: '5px' }}>
            <Progress
                style={{
                    height: '10px',
                    // marginBottom: '5px',
                    borderRadius: "0px",
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px'
                }}
                className="rounded-0 "
                hidden={hidden}
                color="primary"
                striped
                animated
                value={100}
            />
        </div>
    );
};

export default HorizontalLoader;