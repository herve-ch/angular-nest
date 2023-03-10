import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule } from "@nxarch/nest-nguniversal";
import { join } from "path";

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: join(process.cwd(), 'dist/apps/angular-fe/ssr/main.js'),
      viewsPath: join(process.cwd(), 'dist/apps/angular-fe/browser'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
