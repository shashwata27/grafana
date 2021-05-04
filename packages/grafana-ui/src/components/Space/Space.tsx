import React from 'react';
import { css, cx } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { useTheme2 } from '../../themes';

export interface SpaceProps {
  v?: number;
  h?: number;
  layout?: 'block' | 'inline';
}

export const Space = (props: SpaceProps) => {
  const theme = useTheme2();
  const styles = getStyles(theme, props);

  return <span className={cx(styles.wrapper)} />;
};

Space.defaultProps = {
  v: 0,
  h: 0,
  layout: 'block',
};

const getStyles = (theme: GrafanaTheme2, props: SpaceProps) => ({
  wrapper: css([
    {
      paddingRight: theme.spacing(props.h ?? 0),
      paddingBottom: theme.spacing(props.v ?? 0),
    },
    props.layout === 'inline' && {
      display: 'inline-block',
    },
    props.layout === 'block' && {
      display: 'block',
    },
  ]),
});