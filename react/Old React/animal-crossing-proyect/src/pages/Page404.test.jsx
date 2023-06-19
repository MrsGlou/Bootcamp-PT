import React from 'react';
import { describe, expect, it, shallow } from 'vitest';
import Page404 from './Page404';

describe('Page404', () => {
  // Tests that Page404 returns a div element with class name "page-404".
  it('test_happy_path', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper.find('.page-404')).toHaveLength(1);
  });
});
