/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface FoodItem {
  id: string;
  url: string;
  title: string;
  description: string;
  price?: string;
  badge?: string;
}

export interface Review {
  id: string;
  author?: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isSpecial?: boolean;
}
