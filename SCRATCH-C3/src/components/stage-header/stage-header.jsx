import classNames from 'classnames';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import Box from '../box/box.jsx';
import Button from '../button/button.jsx';
import {ComingSoonTooltip} from '../coming-soon/coming-soon.jsx';
import Controls from '../../containers/controls.jsx';
import {getStageSize} from '../../lib/screen-utils.js';

import fullScreenIcon from './icon--fullscreen.svg';
import largeStageIcon from './icon--large-stage.svg';
import smallStageIcon from './icon--small-stage.svg';
import unFullScreenIcon from './icon--unfullscreen.svg';

import styles from './stage-header.css';

const messages = defineMessages({
    largeStageSizeMessage: {
        defaultMessage: 'Stage Size Toggle - Large',
        description: 'Button to change stage size to large',
        id: 'gui.gui.stageSizeLarge'
    },
    smallStageSizeMessage: {
        defaultMessage: 'Stage Size Toggle - Small',
        description: 'Button to change stage size to small',
        id: 'gui.gui.stageSizeSmall'
    },
    fullStageSizeMessage: {
        defaultMessage: 'Stage Size Toggle - Full Screen',
        description: 'Button to change stage size to full screen',
        id: 'gui.gui.stageSizeFull'
    },
    unFullStageSizeMessage: {
        defaultMessage: 'Stage Size Toggle - Un-full screen',
        description: 'Button to get out of full screen mode',
        id: 'gui.gui.stageSizeUnFull'
    }
});

const StageHeaderComponent = function (props) {
    const {
        isFullScreen,
        onKeyPress,
		onNewBackdropClick, //ajout pour le bouton de chargement des scenes
        onSetStageLarge,
        onSetStageFull,
        onSetStageUnFull,
        vm
    } = props;

    let header = null;
    const stageSize = getStageSize(isFullScreen);

    if (isFullScreen) {
        header = (
            <Box className={styles.stageHeaderWrapperOverlay}>
                <Box
                    className={styles.stageMenuWrapper}
                    style={{width: stageSize.width}}
                >
                    <Controls vm={vm} />
                    <Button
                        className={styles.stageButton}
                        onClick={onSetStageUnFull}
                        onKeyPress={onKeyPress}
                    >
                        <img
                            alt={props.intl.formatMessage(messages.unFullStageSizeMessage)}
                            className={styles.stageButtonIcon}
                            draggable={false}
                            src={unFullScreenIcon}
                            title="Full Screen Control"
                        />
                    </Button>
                </Box>
            </Box>
        );
    } else {
        header = (
            <Box className={styles.stageHeaderWrapper}>
                <Box className={styles.stageMenuWrapper}>
                    <Controls vm={vm} />
                    
                </Box>
            </Box>
        );
    }

    return header;
};



StageHeaderComponent.propTypes = {
    intl: intlShape,
    isFullScreen: PropTypes.bool.isRequired,
	onNewBackdropClick: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onSetStageFull: PropTypes.func.isRequired,
    onSetStageLarge: PropTypes.func.isRequired,
    onSetStageUnFull: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(StageHeaderComponent);
