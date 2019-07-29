export type ControlsProps = {
  score: number,
  isActive: boolean,
  isOn: boolean,
  loading: boolean,
  isMachineStep: boolean,
  isUserStep: boolean,
  ids: Ids,
  isError: Boolean,
  sequence: Sequence,
  toggleGame: () => void,
  initializeGame: (ids: Ids) => void,
  nextStageGame: (score: number, ids: Ids, oldSequence: Sequence) => void
};
