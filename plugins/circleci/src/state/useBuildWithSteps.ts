/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { errorApiRef, useApi } from '@backstage/core';
import { useContext } from 'react';
import { circleCIApiRef, GitType } from '../api/index';
import { AppContext } from '.';
import { useSettings } from './useSettings';

import { useAsyncPolling } from './useAsyncPolling';

const INTERVAL_AMOUNT = 3000;

export function useBuildWithSteps(buildId: number) {
  const [settings] = useSettings();
  const [{ buildsWithSteps }, dispatch] = useContext(AppContext);
  const api = useApi(circleCIApiRef);
  const errorApi = useApi(errorApiRef);

  const { isPolling, startPolling, stopPolling } = useAsyncPolling(
    () => getBuildWithSteps(),
    INTERVAL_AMOUNT,
  );

  const getBuildWithSteps = async () => {
    try {
      const options = {
        token: settings.token,
        vcs: {
          owner: settings.owner,
          repo: settings.repo,
          type: GitType.GITHUB,
        },
      };
      const build = await api.getBuild(buildId, options);
      if (isPolling) dispatch({ type: 'setBuildWithSteps', payload: build });
    } catch (e) {
      errorApi.post(e);
    }
  };

  const restartBuild = async () => {
    try {
      await api.retry(buildId, {
        token: settings.token,
        vcs: {
          owner: settings.owner,
          repo: settings.repo,
          type: GitType.GITHUB,
        },
      });
    } catch (e) {
      errorApi.post(e);
    }
  };

  const build = buildsWithSteps[buildId];

  return [
    build,
    {
      restartBuild,
      startPolling,
      stopPolling,
      getBuildWithSteps,
    },
  ] as const;
}
