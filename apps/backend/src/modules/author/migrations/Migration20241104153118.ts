import { Migration } from '@mikro-orm/migrations'

export class Migration20241104153118 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table if not exists "author" ("id" text not null, "handle" text not null, "name" text not null, "about" text not null, "photoUrl" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "author_pkey" primary key ("id"));',
    )
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "author" cascade;')
  }
}
