/**
 * This file includes code originally from:
 *   json-schema-to-typescript (https://github.com/bcherny/json-schema-to-typescript)
 *   Copyright (c) Boris Cherny
 *   Licensed under the MIT License: https://opensource.org/licenses/MIT
 *
 * Modifications and additional code copyright (c) 2025, WSO2 LLC. (https://www.wso2.com)
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {Options} from '.'

export function validateOptions({maxItems}: Partial<Options>): void {
  if (maxItems !== undefined && maxItems < -1) {
    throw RangeError(`Expected options.maxItems to be >= -1, but was given ${maxItems}.`)
  }
}
