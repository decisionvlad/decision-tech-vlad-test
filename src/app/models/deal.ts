import { BroadbandResult } from "../types/broadbanddeals";

export class Deal {
  title = '';
  contractLength = 0;
  usage = '';
  logo = '';
  channelLogos: string[] = [];

  minutes = 0;
  texts = '';
  connectionType = '';

  totalCost = 0;

  speed = 0;
  data = 0;

  get isBroadband(): boolean { return true; }
  get isMobile(): boolean { return this.minutes > 0; }
  get isTV(): boolean { return this.channelLogos.length > 0; }

  constructor(d: BroadbandResult.Deal) {
    this.title = d.title;
    this.contractLength = d.contractLength;
    this.speed = +d.speed.label;
    this.usage = d.usage.label;
    this.logo = d.offer.smallLogo;
    if (d.popularChannels)
      this.channelLogos = d.popularChannels.map(c => c.logo);
    if (d.mobile) {
      this.minutes = +d.mobile.minutes.label;
      this.texts = d.mobile.texts.label;
      this.connectionType = d.mobile.connectionType.label;
      this.data = +d.mobile.data.label.split(' ')[0];
    }
    this.totalCost = d.prices[0].totalContractCost;
  }
}
