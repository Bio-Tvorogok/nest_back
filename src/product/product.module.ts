import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ProductController } from './product.controller';

@Module({
	controllers: [ProductController]
})
export class ProductModule { }
