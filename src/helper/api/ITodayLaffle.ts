export interface TodayLaffle {
  category: string;
  goalId: number;
  goalDetails: [
    {
      goalDetailId: number;
      title: string;
      startTime: string;
      goalDateStatusDesc: string;
    },
  ];
}

export interface ITodayLaffle {
  error?: string;
  success: string;
  response: TodayLaffle[];
}
