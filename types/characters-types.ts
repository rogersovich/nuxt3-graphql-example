type BaseCharactersResponse = {
  characters: BaseResponse;
};

type BaseResponse = {
  info: Info;
  results: TCharactersResult[];
};

type Info = {
  count: number;
};

type TCharactersResult = {
  id: number;
  name: string;
  status: Status;
};

enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
