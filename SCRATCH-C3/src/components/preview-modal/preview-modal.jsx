import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import styles from './preview-modal.css';


const messages = defineMessages({
    label: {
        id: 'gui.previewInfo.label',
        defaultMessage: 'Essayer Scratch 3-CYCLE-3',
        description: 'Scratch 3.0 modal label - for accessibility'
    }
});

const PreviewModal = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.label})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onTryIt}
    >
        <Box className={styles.illustration} />

        <Box className={styles.body}>
            <h2>
                <FormattedMessage
                    defaultMessage="Scratch 3-CYCLE-3 (Version d'essai)"
                    description="Header for Preview Info Modal"
                    id="gui.previewInfo.welcome"
                />
            </h2>
            <p>
                <FormattedMessage
                    defaultMessage="Ceci est une adaptation de Scratch 3 aux programmes du Cycle 3"
                    description="Invitation to try 3.0 preview"
                    id="gui.previewInfo.invitation"
                />
            </p>

            <Box className={styles.buttonRow}>
                
                <button
                    className={styles.okButton}
                    title="tryit"
                    onClick={props.onTryIt}
                >
                    <FormattedMessage
                        defaultMessage="Essayer Scratch 3-CYCLE-3"
                        description="Label for button to try Scratch 3.0 preview"
                        id="gui.previewModal.tryit"
                        
                    />
                </button>
  
            </Box>
        </Box>
    </ReactModal>
);

PreviewModal.propTypes = {
    intl: intlShape.isRequired,
    onCancel: PropTypes.func.isRequired,
    onTryIt: PropTypes.func.isRequired,
    onViewProject: PropTypes.func.isRequired
};

export default injectIntl(PreviewModal);
