import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from "@angular/platform-browser-dynamic/src/platform_providers";

export class Period {
  months: number;
  amount: number;
  constructor(j) {
    this.months = j.months;
    this.amount = j.amount;
  }
}

export class Price {
  periods: Period[];
  firstYear: number;
  totalContractCost: number;
  upFrontCost: number;
  constructor(j) {
    this.periods = j.periods.map(p => new Period(p));
  }
}

export class LabelValue {
  label: string;
  sortValue: number;
  constructor(j) {
    this.label = j.label;
    this.sortValue = j.sortValue;
  }
}

export class Mobile {
  minutes: LabelValue;
  data: LabelValue;
  texts: LabelValue;
  connectionType: LabelValue;
  constructor(j) {
    this.minutes = new LabelValue(j.minutes);
    this.data = new LabelValue(j.data);
    this.texts = new LabelValue(j.texts);
    this.connectionType = new LabelValue(j.connectionType);
  }
}

export enum OfferType {
  None,
  OnlineExclusive
}

export class Offer {
  type: OfferType;
  title: string;
  description: string;
  smallLogo: string;
  expiresAt: string;
  contructor(j) {
    this.type = j.type;
    this.title = j.title;
    this.description = j.description;
    this.smallLogo = j.smallLogo;
    this.expiresAt = j.expiresAt;
  }
}

export class Provider {
  id: number;
  name: string;
  logo: string;
  constructor(j) {
    this.id = j.id;
    this.name = j.name;
    this.logo = j.logo;
  }
}

export class NamePrice {
  name: string;
  price: number;
  constructor(j) {
    this.name = j.name;
    this.price = j.price;
  }
}

export class Channel {
  name: string;
  channgelCategory: string;
  logo: string;
  constructor(j) {
    this.name = j.name;
    this.channgelCategory = j.channgelCategory;
    this.logo = j.logo;
  }
}

export class Deal {
  title: string;
  prices: Price;
  id: number;
  contractLength: number;
  speed: LabelValue;
  uploadSpeed: LabelValue;
  usage: LabelValue;
  mobile: Mobile;
  offer: Offer;
  provider: Provider;
  newLineCost: number;
  upfrontCosts: NamePrice[];
  activeDealId: string;
  productTypes: string[];
  popularChannels: Channel[];

  constructor(j) {
    this.title = j.title;
    this.prices = j.prices.map(p => new Price(p));
    this.id = j.id;
    this.contractLength = j.contractLength;
    this.speed = j.speed;
    this.uploadSpeed = j.uploadSpeed;
    this.usage = j.usage;
    this.mobile = j.mobile;
    this.offer = j.offer;
    this.provider = j.provider;
    this.newLineCost = j.newLineCost;
    this.upfrontCosts = j.upfrontCosts.map(p => new NamePrice(p));
    this.activeDealId = j.activeDealId;
    this.productTypes = j.productTypes;
    this.popularChannels = j.popularChannels.map(p => new Channel(p));
  }
}
