import Modal from './../components/Modal';
import BackgroundColor from './BackgroundColor';
import PrimaryColor from './PrimaryColor';
import { primaryColors, backgroundColors } from './data';
import './theme.css'

const Theme = () => {
    return (
        <Modal className="theme__modal">
            <h3>Customize Your Theme</h3>
            <small>Change the primary and background color to your preference.</small>
            <div className="theme__primary-wrapper">
                <h5>Primary Color</h5>
                <div className="theme__primary-colors">
                    {
                        primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className} />)
                    }
                </div>

            </div>
            <div className="theme__background-wrapper">
                <h5>Background Color</h5>
                <div className="theme__background-colors">
                    {
                        backgroundColors.map(bColors => <BackgroundColor key={bColors.className} className={bColors.className} />)
                    }
                </div>
            </div>
        </Modal>
    )
}

export default Theme