export type GlobalHeaderProps = {
  title: { lineOne: string; lineTwo?: string };
  animationType?: "calender" | "lock" | "whoYouAre" | "family";
  icon?: () => NodeRequire;
};
